package licenta.demo.demo.controller;

import licenta.demo.demo.dto.MenuPagDto;

import licenta.demo.demo.service.JoinQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin()
@RestController
public class JoinQueryController {

	@Autowired
	private JoinQueryService joinQueryService;



	@GetMapping("/ui/menus")
	public ResponseEntity<List<MenuPagDto>> getMenuPagInnerJoin() {
		return new ResponseEntity<List<MenuPagDto>>(joinQueryService.getMenuPagInnerJoin(), HttpStatus.OK);
	}

}
