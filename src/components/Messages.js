


const Messages = ({ messages, name }) => (
  <h2>
    <h3>{name}</h3>
    <div>{messages}</div>
    <p className="text-danger">
      <span className="visually-hidden">Danger: </span>
      This action is not reversible
    </p>
    <a className="visually-hidden-focusable" href="#content">Skip to main content</a>
  </h2>
);

export default Messages;