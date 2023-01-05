import React from 'react'
import Rating from './Rating'

const AccInformations = (title, location, tags, host, rating) => {
    
  return (
    <article className="accommodation-container">
					<section className="accommodation-container__informations">
						<h1 className="accommodation-container__informations__title">
							{title}
						</h1>
						<h2 className="accommodation-container__informations__location">
							{location}
						</h2>
						<div className="accommodation-container__informations__tags">
							{tags.map((tag) => (
								<span key={tag}>{tag}</span>
							))}
						</div>
					</section>

					<section className="accommodation-container__informations2">
						<div className="accommodation-container__informations2__host">
							<h2 className="accommodation-container__informations2__host__name">
								{host.name}
							</h2>
							<img
								src={host.picture}
								alt={host.name}
								className="accommodation-container__informations2__host__picture"
							/>
						</div>
						<div className="accommodation-container__informations2__rating">
							<Rating rate={rating} />
						</div>
					</section>
				</article>
  )
}

export default AccInformations