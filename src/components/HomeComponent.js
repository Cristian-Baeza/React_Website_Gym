import React from 'react';

function Home(props) {
  return (
    <>

      <div className="shake">
        <img src={"https://ik.imagekit.io/0jty0e7po/bg2_7Z-hg-MaJ.png"} alt="amir allam" className=" pimg1" />
        <div className="target ptext">
          <p className="font-weight-bold border">10TH PLANET JIU JITSU SALT LAKE CITY
        </p>
        </div>
      </div>




      <section className="section section-light">
        <h2 className="font-weight-bold">
          10th Planet Black Belt Amir "The Earthshaker" Allam
      </h2>
        <p className="font-weight-bold textstuff">
          Learn cutting-edge 10th Planet Jiu-jitsu training under ADCC veteran Dr. Amir Allam, PhD (Seismology). 10th Planet Jiujitsu is all
          about having a great time while training to become a ninja assassin.
          Come join the no-gi revolution today!
      </p>
      </section>
    </>
  );
}

export default Home;