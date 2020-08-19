package practice.quiz.demo.service;

import org.springframework.stereotype.Service;
import practice.quiz.demo.db.ScoreDb;
import practice.quiz.demo.model.Score;

@Service
public class ScoreService {

    public final ScoreDb scoreDb;

    public ScoreService(ScoreDb scoreDb) {
        this.scoreDb = scoreDb;
    }

    public Score saveScore (Score score) {
        return scoreDb.save(score);
    }
}
