package practice.quiz.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import practice.quiz.demo.model.Score;
import practice.quiz.demo.service.ScoreService;

@RestController
@RequestMapping("api/score")
public class ScoreController {

   public final ScoreService scoreService;

    @Autowired
    public ScoreController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    @PostMapping
    public Score saveSingleScore(@RequestBody Score score) {
        return scoreService.saveScore(score);
    }


}
