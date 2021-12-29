const questList = document.querySelectorAll(".faq-card__text-quest");

questList.forEach(quest=>{
	quest.addEventListener('click',()=>{
		const answer = quest.parentNode.lastElementChild;
		answer.classList.toggle('faq-card__text-answ--show');
		quest.lastElementChild.classList.toggle('faq-card__text-icon-arrow--active')
		quest.classList.toggle('faq-card__text-quest--active')
	
	})
})