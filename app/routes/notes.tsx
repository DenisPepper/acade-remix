import type { LinksFunction } from '@remix-run/node';
import NewNote, { links as NewNoteStyles } from '~/components/new-note';

export const links: LinksFunction = () => {
  return [...NewNoteStyles()];
};

export default function Notes() {
  return (
    <main>
      <NewNote />
    </main>
  );
}
