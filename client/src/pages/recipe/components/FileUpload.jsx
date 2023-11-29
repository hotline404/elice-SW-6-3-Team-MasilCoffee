import React, { useState, useRef, useEffect } from "react";
import * as S from "../recipeWrite/RecipeWrite.style";
import SquareButton from "../../../components/ui/button/SquareButton";
import { AiTwotoneCloseCircle } from "react-icons/ai";

const ALLOW_FILE_EXTENSION = ["image/jpeg", "image/jpg", "image/png", "image/gif"]; //허용 가능한 확장자 목록
const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; //5MB

const PostFile = ({ images, setImages, defaultValue }) => {
  const [fileImages, setFileImages] = useState([]); //업로드 이미지 미리보기
  const [totalSize, setTotalSize] = useState(0); //총 파일 크기를 관리
  const fileInput = useRef(null); //파일 입력 요소에 대한 ref 생성

  useEffect(() => {
    if (defaultValue) { //게시글 수정
      let imageArr = [];
      defaultValue.forEach((image, index) => {
        imageArr.push({
          dataURL: image,
          fileName: `image${index}`,
          //size: file.size,
        });
      });
      setFileImages(imageArr);
      setImages(defaultValue);
    }
  }, []);

  //파일 업로드 버튼 클릭 시 파일 입력 요소 클릭 이벤트 발생
  const handleButtonClick = (e) => {
    fileInput.current.click();
  };
  
  //파일 입력 요소의 값이 변경되면 호출되는 함수
  const handleChange = (e) => {
    const fileArr = e.target.files; //선택한 파일들
    let newFileImages = [...fileImages]; //미리보기 이미지들을 저장할 배열

    //첨부 이미지가 4개 이하인 경우
    if (fileArr.length + fileImages.length <= 4) {
      for (let i = 0; i < fileArr.length; i++) {
        let file = fileArr[i]; //현재 순서의 파일을 file 변수에 할당
        
        if (ALLOW_FILE_EXTENSION.includes(file.type)) {
          if (totalSize + file.size <= FILE_SIZE_MAX_LIMIT) {
            let reader = new FileReader();

            
            reader.onload = () => {
              newFileImages.push({
                dataURL: reader.result,
                fileName: file.name,
                size: file.size,
              }); //파일의 데이터 URL을 배열에 추가
              setTotalSize((prevTotalSize) => prevTotalSize + file.size);
              setFileImages(newFileImages);

              setImages((prevImages) => [...prevImages, file]);
            };
            //현재 순서의 파일을 읽어서 데이터 URL로 변환
            reader.readAsDataURL(file);
          } else {
            alert(
              "총 파일의 크기가 5MB를 초과합니다.\n파일을 다시 첨부해주세요."
            );
            setTotalSize(0);
            setFileImages([]);
            setImages([]);
            break;
          }
        }
      }
    } else {
      alert("최대 4개의 이미지 첨부만 가능합니다.");
    }
  };

  const handleImageDelete = (index) => {
    const updatedFileImages = [...fileImages];
    const deletedFileImage = updatedFileImages.splice(index, 1)[0];
    setFileImages(updatedFileImages);

    setImages((prevImages) => prevImages.filter((image) => image.name !== deletedFileImage.fileName));
    // 삭제한 이미지의 크기만큼 총 파일 크기에서 감소
    setTotalSize((prevTotalSize) => prevTotalSize - deletedFileImage.size);
  };

  return (
    <>
      <S.FileButtonWrap>
        <SquareButton
          text={"이미지 업로드"}
          type={"red"}
          onClick={handleButtonClick}
        />
        {fileImages.length > 0 ? (
          <S.FileNameWrap>
            {fileImages.map((image, index) => (
              <span key={index}>
                {image.fileName}
                {index !== fileImages.length - 1 && ", "}
              </span>
            ))}
          </S.FileNameWrap>
        ) : (
          <S.FileNameWrap>
            (선택) 최대 4개 이미지 파일(png, jpg, jpeg, gif)만 업로드 가능
          </S.FileNameWrap>
        )}
      </S.FileButtonWrap>
      <input
        type="file"
        multiple={true}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleChange}
        ref={fileInput}
      />
      <S.ImageWrap imagesCount={fileImages.length}>
        {fileImages.map((image, index) => (
          <S.ImageContainer key={index} imagesCount={fileImages.length}>
            <S.Image
              alt={image.fileName}
              src={image.dataURL}
              imagesCount={fileImages.length}
            />
            <AiTwotoneCloseCircle
              onClick={() => handleImageDelete(index)}
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                cursor: "pointer",
                fontSize: "1.5rem",
              }}
            />
          </S.ImageContainer>
        ))}
      </S.ImageWrap>
    </>
  );
};

export default PostFile;
