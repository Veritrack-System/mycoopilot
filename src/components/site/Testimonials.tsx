import { useId, useState } from "react";

import { testimonials, type Testimonial } from "@/content/home";

const INITIAL = 3;

/**
 * Testimonial grid for the Proof section: three across, with a "Show more" control for the
 * rest (client review: seven is too many to show at once). Renders nothing until at least one
 * quote has been supplied and published.
 */
export function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const items = testimonials.items.filter(
    (item): item is Testimonial & { quote: string } => item.published && Boolean(item.quote),
  );
  if (items.length === 0) return null;

  const visible = expanded ? items : items.slice(0, INITIAL);
  const hidden = items.length - INITIAL;

  return (
    <div className="cp-quotes" data-reveal="">
      <p className="cp-quotes__label">{testimonials.label}</p>
      <ul id={listId} className="cp-quotes__grid">
        {visible.map((item) => (
          <li key={item.name} className="cp-quote">
            <figure>
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <figcaption>
                <span className="cp-quote__name">{item.name}</span>
                <span className="cp-quote__role">
                  {item.role}, {item.organisation}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {hidden > 0 ? (
        <button
          type="button"
          className="cp-btn cp-btn--ghost-dark cp-quotes__more"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show fewer" : `Show ${hidden} more`}
        </button>
      ) : null}
    </div>
  );
}
