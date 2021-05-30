export interface RedditPost {
	id: string
	title: string
	name: string

	author: string
	author_fullname: string

	created: number
	created_utc: number

	num_comments: number

	score: number
	ups: number
	downs: number
	upvote_ratio: number

	spoiler: boolean

	url: string
	permalink: string

	thumbnail: string
	thumbnail_height: number
	thumbnail_width: number

	subreddit: string
	subreddit_id: string
}
