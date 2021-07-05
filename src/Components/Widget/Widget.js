import React from 'react';
import './Widget.css';

function Widget() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fofficialroutineofnepalbanda%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        style={{border: 'none', overflow: 'hidden'}}
        title="Routine Of Nepal Banda"
      >
        >
      </iframe>
    </div>
  );
}

export default Widget;
