import React  from 'react'

const Newsitems = (props) =>{
        let { title, description,imageUrl,newsUrl } = props;
        return (
            <div>
                <div className='card'>
                    <img src={!imageUrl?require('./OnlyNewz-logos_transparent.png'):imageUrl} className='card-img-top' alt='OnlyNews' />
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{description}</p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-dark btn-sm " tabindex="-1" role="button" >Read in Details</a>
                    </div>
                </div>
            </div>
        )
}

export default Newsitems
