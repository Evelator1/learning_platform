
export default function JobDescription({selectedJob}) {


    const paragraphs = selectedJob.job_description.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));
    
      const bulletedList = paragraphs.map((paragraph, index) => {
        const bulletPoints = paragraph.props.children.split('•').map((item, idx) => {
          if (item.trim() !== '') {
            return <li key={idx}>{item.trim()}</li>;
          }
          return null;
        });
    
        return <ul key={index}>{bulletPoints}</ul>;
      });
    
    
    

  return (
    <p> {bulletedList}</p>  )
}
