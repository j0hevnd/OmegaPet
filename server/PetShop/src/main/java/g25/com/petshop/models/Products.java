package g25.com.petshop.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(value = "Products")
public class Products {
    @Id
    Long id;
    String productName;
    String productImg;
    String productDescription;
    float productPrice;
}
