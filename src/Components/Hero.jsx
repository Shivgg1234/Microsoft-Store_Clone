import "./Hero.css";

export default function Hero() {
  return (
    <div className="container">

      <div className="hero">
        <img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="hero" />

        <div className="overlay">
          <h1>The Grand Theft Auto V</h1>
          <p>Save up to 40%</p>
          <button>Show All</button>
        </div>

        <button className="arrow left">◀</button>
        <button className="arrow right">▶</button>
      </div>

      <div className="right">


        <div className="card large">
          <img src="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqkJpgh0RHhtdzIqyPKZW.m.v1AImAOEpz1OL99rN2wAYgBqo8Z8eg3pfxHYVXOBbQIqJ_rl9QbRVAmKICe6.0XL2h7cm7j8ArPQM7wHpP3NJxL7Nnr5x07434qzOdXqSlhLiX6Y.9XdbMi9IIApZdyXYIZcp1EHKjDUjUjE6VPeSm0qTZlJUlv_jil3FfkehK&h=2160" alt="" />
          <div className="card-overlay">
            <h2>Image Lab in ChatOn</h2>
            <button>Get</button>
          </div>
        </div>

  
        <div className="bottom">
          <div className="card small">
            <img src="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqVIbEZOZfakQUY7fDpGSa3e1Gykn8Pp1YtZkzFxEhYar94NBAE036oMzRbPdlvvL2CMhyP6S7gLm7Ic9hmuBLImAPnLZM92fXV_J_7zjXrp..e_8HtPv1xmF7bSgbxAUUR4XegKXtkW2fk8U19g6f4lCuPfqto4aWYJhWvvU.EUE-&h=2160" alt="" />
            <div className="card-overlay">
              <p>New P&ID System Symbols</p>
            </div>
          </div>

          <div className="card small">
            <img src="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqg3HOLmZashdzSWScCMmFSv5MKsebwjtqzRqDPo9r.rnTRstkanzfx9DvO8UoUvOfkc1m3q8Dfqj7J_Q05H0aJwK7.g8SPT1FhWKbRS_FO6FUaOfCThFZaHeow.IfALrMAgUZTU1ZZHijbx83H8bKjg--&h=2160" alt="" />
            <div className="card-overlay">
              <p>Easy Invoice Generator</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}