// for file in (ls)
//     echo $file | string match --regex --quiet  "(?<name>.+)\..*"
//     convert "$file" (echo $name | string replace --all " " "-" | string lower).jpg
// end