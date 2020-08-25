package licenta.demo.demo.controller;

import licenta.demo.demo.entity.Role;
import licenta.demo.demo.entity.RoleName;
import licenta.demo.demo.entity.Users;
import licenta.demo.demo.message.request.LoginForm;
import licenta.demo.demo.message.request.SignUpForm;
import licenta.demo.demo.message.response.JwtResponse;
import licenta.demo.demo.message.response.ResponseMessage;
import licenta.demo.demo.repository.RoleRepository;
import licenta.demo.demo.repository.UsersRepository;
import licenta.demo.demo.security.jwt.JwtProvider;
import licenta.demo.demo.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin()
@RestController
@RequestMapping("/api/auth")
public class AuthRestAPIs {

	@Autowired
    AuthenticationManager authenticationManager;

	@Autowired
	UsersRepository userRepository;

	@Autowired
	private UsersService usersService;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
    PasswordEncoder encoder;

	@Autowired
	JwtProvider jwtProvider;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtProvider.generateJwtToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();

		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
					HttpStatus.BAD_REQUEST);
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
					HttpStatus.BAD_REQUEST);
		}

		// Creating user's account
		Users user = new Users(signUpRequest.getUsername(),
				encoder.encode(signUpRequest.getPassword()), signUpRequest.getEmail());

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
		strRoles.forEach(role -> {
			switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
					roles.add(adminRole);

					break;
				default:
					Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
					roles.add(userRole);
			}
		});
	}
		user.setStatus("active");
		user.setRoles(roles);
		usersService.save(user);

		return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
	}
}
