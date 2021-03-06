package practice.quiz.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "userScore")
public class Score {

    @Id
    private String id;
    private String username;
    private String game;
    private int totalScore;

}
