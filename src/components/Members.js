import React from "react";

function Members(props) {



  return (
    <section className="SectionMembers">
      <div className="labMemberWrapper">
        <img
          onClick={props.openBackPopup}
          className="MemberImage"
          src="https://static.wixstatic.com/media/0d5d6b_c59bd6fb75fe4d17a4aafb8db03d0232.jpg/v1/crop/x_278,y_347,w_2562,h_2653/fill/w_207,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0d5d6b_c59bd6fb75fe4d17a4aafb8db03d0232.jpg"
          alt="Description of the image"
        />
      </div>
    </section>
  );
}

export default Members;
