package practice.quiz.demo.db;

import org.springframework.data.repository.PagingAndSortingRepository;
import practice.quiz.demo.model.Score;

public interface ScoreDb extends PagingAndSortingRepository<Score, String> {
}
