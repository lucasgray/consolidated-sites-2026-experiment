import { allProPosts, allHobbyPosts } from 'contentlayer/generated'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer.js'

export const sortedProPosts = sortPosts(allProPosts).filter((p) => p.draft !== true)
export const sortedHobbyPosts = sortPosts(allHobbyPosts).filter((p) => p.draft !== true)

export { allCoreContent }
