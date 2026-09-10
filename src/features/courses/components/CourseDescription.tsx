export interface CourseDescriptionProps {
  paragraphs: string[];
}

export function CourseDescription({ paragraphs }: CourseDescriptionProps) {
  if (paragraphs.length === 0) return null;

  return (
    <section className="section spdt">
      <div className="container">
        <div className="heading align-center">
          <h2 className="heading-title size-l">Course Description</h2>
        </div>
        <div className="row">
          {paragraphs.map((paragraph, index) => (
            <div className="col-lg-6 lg-order-2" key={index}>
              <div className="pdr80 lg-mt15">
                <div className="heading mb24">
                  <div className="heading-desc">{paragraph}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
