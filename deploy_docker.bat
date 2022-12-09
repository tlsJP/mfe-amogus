
call npm i

call ng build

docker built -t amogus .

docker stop amogus

docker run -itd --rm -p 3030:80 --name amogus amogus