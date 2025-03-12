import { ReactNode } from "react";

interface AccordionItemProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function AccordionItem({ id, title, children }: AccordionItemProps) {
  return (
    <div className="accordion">
      <input type="checkbox" id={id} />
      <label htmlFor={id} className="accordion-label">
        {title}
        <span className="plus"><i className="fas fa-chevron-down"></i></span>
        <span className="minus"><i className="fas fa-chevron-up"></i></span>
      </label>
      <div className="accordion-content">
        {children}
      </div>
    </div>
  );
}

interface AccordionProps {
  items: {
    id: string;
    title: string;
    content: ReactNode;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <section className="deroule">
      {items.map((item) => (
        <AccordionItem key={item.id} id={item.id} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </section>
  );
}