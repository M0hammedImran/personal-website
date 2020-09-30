import React from 'react';
import './Cards.scss';
function Cards({ name, sourceCode, workingSite, description, imageUrl }) {
  return (
    <div>
      <div className="card " style={{ width: '100%', minHeight: '250px' }}>
        <div className="card-body">
          {imageUrl ? (
            <img
              class="card-img-top border border-success"
              src={imageUrl}
              alt="Card-cap"
            />
          ) : (
            ''
          )}
          <h4 className="card-title mt-2">{name}</h4>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
           */}
          <p className="card-text">{description}</p>
          <a
            href={sourceCode}
            className="card-link"
            target="_blank"
            rel="noopener  noreferrer"
          >
            Source Code
          </a>
          <a
            href={workingSite}
            className="card-link"
            target="_blank"
            rel="noopener  noreferrer"
            style={{
              textDecoration: workingSite ? 'none' : 'line-through',
              color: workingSite ? '' : 'grey',
            }}
          >
            Working Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
