import './Reviews.css';
import Victoria_Dobrzhanska from '../../assets/reviews/Victoria_Dobrzhanska@1x.png';
import Nazar_Babenko from '../../assets/reviews/Nazar-Babenko@1x.png';
import Olena_Kampusch from '../../assets/reviews/Olena-Kampusch@1x.png';
import Natalia_Sus from '../../assets/reviews/Natalia-Sus@1x.png';
import Danilo_Nottingham from '../../assets/reviews/Danilo-Nottingham@1x.png';
import Irina_Tydnyuk from '../../assets/reviews/Irina-Tydnyuk@1x.png';

const Reviews = () => {
  return (
    <section id="choco_love" className="choco_loves pt-[60px]">
      <div className="container">
        <h2 className="reviews_title">
          <span className="reviews_text_decoration">Reviews</span> from our
          clients
        </h2>
        <div className="reviews_section">
          <ul className="reviews_box_list">
            <li className="reviews_list">
              <h3 className="reviews_list_title">Victoria Dobrzhanska</h3>
              <img
                className="reviews_photo"
                src={Victoria_Dobrzhanska}
                alt="Victoria Dobrzhanska"
              />
              <p className="reviews_list_reviews">
                100% reliability. Excellent service
              </p>
            </li>
            <li className="reviews_list reviews_list_nb">
              <h3 className="reviews_list_title">Nazar Babenko</h3>
              <p className="reviews_list_reviews">
                We used car rental services on this site. Only positive emotions
                remained.
              </p>
              <img
                className="reviews_photo"
                src={Nazar_Babenko}
                alt="Nazar Babenko"
              />
            </li>
            <li className="reviews_list reviews_list_ok">
              <h3 className="reviews_list_title">Olena Kampusch</h3>
              <p className="reviews_list_reviews">
                Very pleased. I will recommend it!!
              </p>
              <img
                className="reviews_photo"
                src={Olena_Kampusch}
                alt="Olena Kampusch"
              />
            </li>
            <li className="reviews_list reviews_list_ns">
              <h3 className="reviews_list_title">Natalia Sus</h3>
              <p className="reviews_list_reviews">
                The chocolate assortment was delicious. Both dark and milk
                chocolate pieces were smooth and just right on the sweetness
                level.
              </p>
              <img
                className="reviews_photo"
                src={Natalia_Sus}
                alt="Natalia Sus"
              />
            </li>
            <li className="reviews_list reviews_list_ds">
              <h3 className="reviews_list_title">Danilo Nottingham</h3>
              <p className="reviews_list_reviews">
                This is delicious. It so rich and flavorful you don’t need to
                use as many. I love topping an apple with almond butter and
                these chips for a snack.
              </p>
              <img
                className="reviews_photo"
                src={Danilo_Nottingham}
                alt="Danilo Nottingham"
              />
            </li>
            <li className="reviews_list reviews_list_it">
              <h3 className="reviews_list_title">Irina Tydnyuk</h3>
              <p className="reviews_list_reviews">
                This is simply the best chocolate around, and I'm just thrilled
                to support a local company! Best local chocolate - world
                className :)
              </p>
              <img
                className="reviews_photo"
                src={Irina_Tydnyuk}
                alt="Irina Tydnyuk"
              />
            </li>
          </ul>
          <div className="reviews_pointer">
            <ul className="reviews_slider_list">
              <li className="reviews_slick_dots"></li>
              <li className="reviews_slick_dots"></li>
              <li className="reviews_slick_dots"></li>
              <li className="reviews_slick_dots"></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
