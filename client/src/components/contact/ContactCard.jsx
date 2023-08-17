export default function ContactCard({ props }) {
  return (
    <article className="m-6 rounded-full border-sand border-8 bg-green bg-opacity-90">
      <div className="p-6 text-center">
        <h5 className="mb-2 text-4xl leading-tight text-white">{props.name}</h5>
        <p className="mb-4 text-xl text-white">
          <a href={props.gitHub} className="text-white">
            GitHub
          </a>
          <br />
          <a href={props.linkedIn} className="text-white">
            LinkedIn
          </a>
        </p>
      </div>
    </article>
  );
}
