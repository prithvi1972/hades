import React from 'react';
import './style.css';
import ProductCard from '../../../../components/cards/productCard';

const cards = [
	{title: 'esdrft', subTitle: 'ubhj ygbhn ybhujnk vgbh', image:'/img/intro-bck.jpeg'},
	{title: 'esdrft', subTitle: 'ubhj ygbhn ybhujnk vgbh', image:'/img/intro-bck.jpeg'},
	{title: 'esdrft', subTitle: 'ubhj ygbhn ybhujnk vgbh', image:'/img/intro-bck.jpeg'},
	{title: 'esdrft', subTitle: 'ubhj ygbhn ybhujnk vgbh', image:'/img/intro-bck.jpeg'},
];

function BlogSection() {
	return (
		<section className={'blogSection'}>
			<h2 className={'blogHead'}>Blog</h2>
			<div className={'cardsWrapper'}>
				{cards.map(({ title, subTitle, image, onClick }) => (
					<ProductCard
						title={title}
						subTitle={subTitle}
						image={image}
						onClick={onClick}
					/>
				))}
			</div>
		</section>
	);
}

export default BlogSection;