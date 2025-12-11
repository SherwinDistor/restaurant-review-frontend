export default class CreateReviewDto {
	constructor(title, content, rating) {
		this.title = title;
		this.content = content;
		this.rating = rating;
	}
}
