@RestController
@RequestMapping("/api/email")
@CrossOrigin("*")
public class EmailController {

    @PostMapping("/generate")
    public Map<String, String> generateEmail(@RequestBody Map<String, String> req) {
        String prompt = req.get("prompt");
        String tone = req.get("tone");

        String generated = GeminiService.generate(prompt, tone);

        return Map.of("email", generated);
    }
}
