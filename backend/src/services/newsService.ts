import { NewsRepository } from "../repositories/newsRepository.js";

export class NewsService {
  static async getAllNews() {
    return await NewsRepository.getAllNews();
  }

  static async getNewsBySlug(slug: string) {
    return await NewsRepository.getNewsBySlug(slug);
  }
}
