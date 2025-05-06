import React, { forwardRef } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ id, children, className, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </section>
    );
  }
);

export default Section;