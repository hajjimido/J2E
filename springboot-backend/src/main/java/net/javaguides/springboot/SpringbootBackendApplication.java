package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

}
//Cette classe est une implémentation personnalisée d'une exception appelée ResourceNotFoundException
// qui étend la classe RuntimeException.
// Elle est utilisée pour signaler une situation où une ressource spécifique n'a pas été trouvée.