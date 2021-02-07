git filter-branch --tree-filter 'rm -rf `cat /home/dj/Development/ThirdsMedia/100DaysOfCode/large_files.txt |cut -d " " -f 2` ' --prune-empty <BRANCHES>
