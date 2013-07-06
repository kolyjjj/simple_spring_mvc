package li.koly.service;

import org.springframework.stereotype.Service;

import java.util.Comparator;

@Service
public class CaseInsensitiveComparator implements Comparator<String> {
    @Override
    public int compare(String s1, String s2) {
        assert s1 != null && s2 != null;
        return String.CASE_INSENSITIVE_ORDER.compare(s1, s2);
    }

}
