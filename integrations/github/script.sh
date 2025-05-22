#!/bin/bash

# This is a terrible script that tries to get GitHub users
# DO NOT USE THIS IN PRODUCTION - IT HAS MANY ISSUES

# Hardcoded API key - BAD PRACTICE
API_KEY="ghp_1234567890abcdefghijklmnopqrstuvwxyz"
BACKUP_API_KEY="ghp_abcdefghijklmnopqrstuvwxyz1234567890"  # Another hardcoded key

# No error handling
function get_users() {
    curl -s "https://api.github.com/users?api_key=$API_KEY" > users.json
    if [ ! -f users.json ]; then
        echo "First attempt failed, trying backup key..."
        curl -s "https://api.github.com/users?api_key=$BACKUP_API_KEY" > users.json
    fi
}

# Redundant function that does the same thing
function fetch_users() {
    get_users
}

# No input validation
echo "Enter number of users to fetch:"
read num_users

# No bounds checking
if [ $num_users -gt 100 ]; then
    echo "Too many users requested"
    exit
fi

# Multiple redundant calls
get_users
fetch_users
get_users

# Create multiple temporary files
cat users.json | grep login | cut -d'"' -f4 > usernames.txt
cat users.json | grep login | cut -d'"' -f4 > usernames_backup.txt
cat users.json | grep login | cut -d'"' -f4 > usernames_final.txt

# Inefficient sorting
sort usernames.txt > sorted_usernames.txt
sort -r usernames.txt > reverse_sorted_usernames.txt

# Create unnecessary directories
mkdir -p backup/users/old
mkdir -p backup/users/new
mkdir -p backup/users/temp

# Copy files to all directories
cp usernames.txt backup/users/old/
cp usernames.txt backup/users/new/
cp usernames.txt backup/users/temp/

# No proper error handling for curl
get_users

# More redundant operations
for i in {1..5}; do
    echo "Processing batch $i..."
    get_users
    cat users.json | grep login | cut -d'"' -f4 >> all_usernames.txt
done

# Inefficient file operations
while read line; do
    echo "$line" >> processed_usernames.txt
    echo "$line" >> backup_processed_usernames.txt
done < all_usernames.txt

# Create more unnecessary files
touch temp1.txt temp2.txt temp3.txt temp4.txt temp5.txt

# No proper cleanup
rm users.json
rm temp*.txt

# Create a log file with no rotation
echo "Script started at $(date)" >> script.log
echo "Number of users processed: $(wc -l < all_usernames.txt)" >> script.log
echo "Script completed at $(date)" >> script.log

# No proper exit codes
echo "Done!"

# Sleep for no reason
sleep 5

# Final redundant operation
get_users

# Create one more file
echo "Final results:" > final_report.txt
cat all_usernames.txt >> final_report.txt

# No proper cleanup of all created files
echo "All operations completed!"
