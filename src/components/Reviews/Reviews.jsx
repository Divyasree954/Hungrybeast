import React from "react";
import "./reviews.css";
import newBackgroundImg from "../../assets/cm.jpg"; 
import charlieImg from "../../assets/charlie.avif";
import johnDoeImg from "../../assets/john-doe.avif";
import karthikImg from "../../assets/karthik.jpg";``
import inboxBackground from "../../assets/cm.jpg";

const Reviews = () => {
    return (
        <section id="reviews">
        <div className="background" style={{ backgroundImage: `url(${newBackgroundImg})` }}> 
            <h1 className="title">Reviews</h1>
            <p className="subtitle">What our customers are saying.....</p>
            <div className="reviews">
                <div className="review-card">
                    <div className="background-wrapper" style={{ backgroundImage: `url(${inboxBackground})` }}></div>
                    <img src={charlieImg} alt="Charlie" />
                    <h2 className="name">CHARLIE</h2>
                    <p className="rating">★★★★★</p>
                    <p className="review-text">We loved this place. The dishes are so tasty. Very Clean Environment.</p>
                </div>
                <div className="review-card">
                    <div className="background-wrapper" style={{ backgroundImage: `url(${inboxBackground})` }}></div>
                    <img src={johnDoeImg} alt="John Doe" />
                    <h2 className="name">JOHN DOE</h2>
                    <p className="rating">★★★★★</p>
                    <p className="review-text">The vibes here are pretty fun! It kind of looks like a night market.</p>
                </div>
                <div className="review-card">
                    <div className="background-wrapper" style={{ backgroundImage: `url(${inboxBackground})` }}></div>
                    <img src={karthikImg} alt="Karthik" />
                    <h2 className="name">KARTHIK</h2>
                    <p className="rating">★★★★★</p>
                    <p className="review-text">The food was really very tasty. I really enjoyed a lot with my friends.</p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Reviews;
