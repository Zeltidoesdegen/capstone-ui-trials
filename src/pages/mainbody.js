import "../component_individual_styles/mainbody.css"
import {Link} from 'react-router-dom'

const MainBody = () => {
    return ( <>
        <div class="rootBody">
            <section class="hero-section">
                <div class="card-grid">
                    
                    <a class="card" >
                        <Link to="/Pick_Ingredients">
                            <div class="card__background card-1"></div>
                            <div class="card__content">
                                <p class="card__category">Category</p>
                                <h3 class="card__heading">Pick your Ingredients</h3>
                            </div>
                        </Link>
                    </a>
                    
                    <a class="card">
                        <Link to="/Random_Recipe">
                            <div class="card__background card-2"></div>
                            <div class="card__content">
                                <p class="card__category">Category</p>
                                <h3 class="card__heading">Random Recipe</h3>
                            </div>
                        </Link>
                    </a>

                    <a class="card" href="#">
                        <div class="card__background card-3"></div>
                        <div class="card__content">
                            <p class="card__category">Category</p>
                            <h3 class="card__heading">Card Heading</h3>
                        </div>
                    </a>
                    
                    <a class="card" href="#">
                        <div class="card__background card-4"></div>
                        <div class="card__content">
                            <p class="card__category">Category</p>
                            <h3 class="card__heading">Card Heading</h3>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    </> );
}
 
export default MainBody;