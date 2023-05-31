import { useNavigate } from "react-router-dom";
import FAQsApp from "../../FAQsApp";

import './index.css'

function Home() {
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    // 👇️ navigate to /contacts
    navigate('/signin');
  };

  return (
    <div className="home-container pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className='col-12'>
            <div className='netflix-container'>
              <div>
                <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' className='netflix-home-logo' alt='netflix' />
              </div>
              <div className='sign-in-btn' onClick={navigateToSignIn}>
                <p>Sign In</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="main-card pt-4 pb-4">
              <div className="main-heading-card">
                <h1 className='unlimited-description'>Unlimited movies, TV shows and more</h1>
                <p className='watch-description'>Watch anywhere. Cancel anytime.</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="movie-details pt-5">
              <div className="movie-width">
                <h1 className='head-description'>Enjoy on your TV</h1>
                <p className='para-description'>Enjoy on your TV Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
              </div>
              <img src="https://c4.wallpaperflare.com/wallpaper/422/445/175/movies-hollywood-movies-wallpaper-thumb.jpg" className="movie-images" alt="movie" />
            </div>
          </div>
          <hr className="mt-5 mb-3" />
          <div className="col-12">
            <div className="movie-details pt-5">
              <div className="movie-width order-md-1">
                <h1 className='head-description'>Watch everywhere</h1>
                <p className='para-description'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
              </div>
              <img src="https://e0.pxfuel.com/wallpapers/433/456/desktop-wallpaper-extracurricular-netflix.jpg" className="movie-images" alt="movie" />
            </div>
          </div>
          <hr className="mt-5 mb-3" />
          <div className="col-12">
            <div className="movie-details pt-5">
              <div className="movie-width order-0">
                <h1 className='head-description'>Create profiles for kids</h1>
                <p className='para-description'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
              </div>
              <img src="https://w0.peakpx.com/wallpaper/189/738/HD-wallpaper-cartoon-peter-pan-lady-and-the-tramp-collage-snow-white-mermaid-movie-disney-ariel-the-little-mermaid-alice-alice-in-wonderland-mickey-mouse-donald-duck-goofy-stitch-lilo-stitch.jpg" className="movie-images" alt="movie" />
            </div>
          </div>
          <hr className="mt-5 mb-3" />
          <div className="col-12">
            <div className="movie-details pt-5">
              <div className="movie-width order-md-1">
                <h1 className='head-description'>Download your shows to watch offline</h1>
                <p className='para-description'>Save your favourites easily and always have something to watch.</p>
              </div>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png" className="movie-images" alt="movie" />
            </div>
          </div>
          <div className="col-12">
            <FAQsApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;