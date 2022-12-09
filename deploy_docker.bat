
call npm i

call ng build

docker build -t mfe-amogus .

docker stop mfe-amogus

docker run -itd --rm -p 3030:80 --name mfe-amogus mfe-amogus