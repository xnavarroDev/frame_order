# Frame order

Someone has shuffled the frames of every video in our archive. Put them back in order.

## Input

A video is a directory of PNG frames. The names are random. All frames in a video are
the same size. There is no audio.

`examples/digits/` is a tiny video of five frames showing the numbers 1 to 5, shuffled.
We score your solution on real videos.

## What to write

A git repo with a `Dockerfile` at the root. We build it once, then run it on each video:

```
docker build -t frame-order .
docker run --rm --network none -v /path/to/video/:/frames:ro frame-order
```

Your program prints the names of the frames to standard output, one per line, in your
best guess at their original order. Every frame appears exactly once.

## Rules

Don't expect internet access or a GPU when your program is running.

Use whatever tools you like, AI assistants included.

## Submitting

1. Click "Use this template" to make a private copy. Don't fork it.
2. Add your solution, and a short `NOTES.md` on what you tried and where it still goes
   wrong.
3. Add [@grist-hiring](https://github.com/grist-hiring) as a collaborator (Settings >
   Collaborators).
4. Fill in [this form](https://hiring.getgrist.com/forms/46sui68xMKyENn1AT4H6SY/7) with your
   repo URL and your resume. If you prefer, put your resume in the repo instead, as
   `RESUME.md` or `RESUME.pdf` at the top level.

Submissions must be in a private repo to be reviewed.
