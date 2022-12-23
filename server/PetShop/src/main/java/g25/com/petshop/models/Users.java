package g25.com.petshop.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(value = "Users")
public class Users {
    @Id
    Long userId;
    String fullName;
    String password;
}
