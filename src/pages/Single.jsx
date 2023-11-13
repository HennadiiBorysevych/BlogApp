import React from "react";

import editImage from "../img/edit.png";
import deleteImage from "../img/delete.png";

import Menu from "../components/Menu";


const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="#" alt="" />
      </div>
      <div className="user">
        <img src="#" alt="" />
        <div className="info">
          <span>John</span>
          <p>posted 2 days ago</p>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={editImage} alt="edit" />
            </Link>
            <img src={deleteImage} alt="delete" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          quos?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse
          ipsa atque ab quod possimus qui cupiditate quas maxime? Quod, eveniet
          mollitia quos quas tempora repellat ipsam quibusdam unde et eos
          blanditiis placeat at incidunt officiis quo ea quidem, atque velit,
          exercitationem nam voluptatum fuga nulla? Veniam saepe eos provident,
          beatae recusandae deleniti eius iure commodi ducimus, obcaecati
          maiores officiis itaque soluta, accusamus magni vel animi
          <br />
          <br />
          perspiciatis. Rerum inventore laborum placeat accusamus ipsa amet
          eaque sapiente enim neque illo pariatur odio molestiae voluptatibus
          recusandae ad, debitis deleniti velit voluptatem quibusdam, quo
          similique delectus ut aperiam quas. Placeat quae dolor expedita
          voluptates nostrum reiciendis nulla, itaque molestias? Omnis
          necessitatibus atque nisi odio sed quae temporibus eos quos suscipit,
          eveniet veniam facere similique totam? Dolor, voluptates amet totam
          rerum dolorum commodi ratione incidunt aliquid vitae dignissimos
          necessitatibus earum iure quis quos modi sed doloremque esse deserunt!
          Asperiores nihil magnam suscipit autem aspernatur.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
