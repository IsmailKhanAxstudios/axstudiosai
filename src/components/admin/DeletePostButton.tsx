"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { removePost } from "@/app/admin/actions";

export default function DeletePostButton({ slug, title, revision }: { slug: string; title: string; revision: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const deleting = useRef(false);
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function confirmDelete() {
    if (deleting.current) return;
    deleting.current = true;
    setPending(true);
    setError("");
    try {
      const result = await removePost(slug, revision);
      if (result.error) {
        setError(result.error);
        return;
      }
      dialog.current?.close();
      router.replace("/admin?changed=deleted");
      router.refresh();
    } catch {
      setError("The post could not be deleted. Try again.");
    } finally {
      deleting.current = false;
      setPending(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setError("");
          dialog.current?.showModal();
        }}
        className="rounded-lg border border-foreground/10 px-3 py-2 text-sm font-medium text-[rgb(var(--accent-text))] hover:bg-foreground/5"
      >
        Delete<span className="sr-only"> {title}</span>
      </button>
      <dialog
        ref={dialog}
        aria-labelledby={`delete-${slug}`}
        onCancel={(event) => { if (pending) event.preventDefault(); }}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border border-foreground/15 bg-surface p-6 text-foreground shadow-xl backdrop:bg-black/60"
      >
        <h2 id={`delete-${slug}`} className="text-xl font-semibold">Delete this post?</h2>
        <p className="mt-3 break-words text-sm leading-relaxed text-secondary-text">
          “{title}” will be removed from the public blog and its article URL will stop working.
        </p>
        {error && <p role="alert" className="mt-3 text-sm text-[rgb(var(--accent-text))]">{error}</p>}
        <div className="mt-6 flex flex-wrap justify-end gap-2">
          <button type="button" autoFocus disabled={pending} onClick={() => dialog.current?.close()} className="rounded-lg border border-foreground/15 px-4 py-2 text-sm font-medium">
            Cancel
          </button>
          <button type="button" disabled={pending} onClick={confirmDelete} className="rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
            {pending ? "Deleting…" : "Delete post"}
          </button>
        </div>
      </dialog>
    </>
  );
}
