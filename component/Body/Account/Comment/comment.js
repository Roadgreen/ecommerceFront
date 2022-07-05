import React from 'react'

export default function comment(props) {
    const data = props.data;
  const CommandMapping = (item, id) => {
    return (
      <div key={id}>
        <p> {item.id}</p>
        <p> {item.commentHtml}</p>
        <p> {item.date}</p>
        <button>Modifier mon commentaire</button>
      </div>
    );
  };
  return (
    <div className={styles.container}>
    <h3>Mes Commentaires</h3>
    <div>
      <h4>ID</h4>
      <h4>QTÉ</h4>
      <h4>DATE</h4>
      <h4></h4>
    </div>

    {data.comment.map(CommandMapping)}
  </div>
  )
}
