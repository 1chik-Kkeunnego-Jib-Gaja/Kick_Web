import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Footer from "../../components/footer";

interface PostRequestData {
  name: string;
  ingredient: string;
  recipe: string;
  imageUrl: string;
  tags: string[];
}

const Post: React.FC = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [recipe, setRecipe] = useState("");
  const [ingredient, setIngredient] = useState("");

  // 이미지 업로드 함수
  const uploadImage = async (): Promise<string[] | null> => {
    if (!image) return null;

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("images", image);

    const response = await fetch("http://211.112.175.88:9999/images", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("이미지 업로드 실패:", errorText);
      return null;
    }

    const imageData = await response.json();
    return imageData.imageUrl;
  };

  // 해시태그 입력 처리 함수
  const handleTagInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value);
  };

  // 스페이스바로 태그 추가 처리 함수
  const handleTagKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === " " && tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // 태그 삭제 함수
  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // 이미지 변경 처리 함수
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  // 제출 버튼 클릭 처리 함수
  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    if (!title || !recipe || !ingredient || !image) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try {
      const imageUrls = await uploadImage();
      if (!imageUrls || imageUrls.length === 0) {
        alert("이미지 업로드에 실패했습니다.");
        return;
      }

      const postData: PostRequestData = {
        name: title,
        ingredient,
        recipe,
        imageUrl: imageUrls[0], // 첫 번째 이미지 URL 사용
        tags,
      };

      const response = await fetch("http://211.112.175.88:9999/combinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("조합 등록 실패:", errorText);
        alert("조합 등록에 실패했습니다.");
        return;
      }

      alert("조합이 성공적으로 등록되었습니다!");
      navigate("/main");
    } catch (error) {
      console.error("전체 에러:", error);
      alert("오류 발생: 알 수 없는 문제로 요청이 처리되지 않았습니다.");
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>←돌아가기</S.BackButton>
      </S.Header>
      <S.ImageUploadBox>
        {image ? (
          <S.ImagePreview src={URL.createObjectURL(image)} alt="Preview" />
        ) : (
          <S.UploadIcon>+</S.UploadIcon>
        )}
        <S.ImageInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </S.ImageUploadBox>
      <S.Form>
        <S.Label>제목</S.Label>
        <S.Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요."
        />
        <S.TagContainer>
          {tags.map((tag, index) => (
            <S.Tag key={index}>
              #{tag}{" "}
              <S.TagRemoveButton onClick={() => removeTag(index)}>
                ×
              </S.TagRemoveButton>
            </S.Tag>
          ))}
          <S.TagInput
            value={tagInput}
            onChange={handleTagInput}
            onKeyDown={handleTagKeyDown}
            placeholder="태그를 입력해주세요."
          />
        </S.TagContainer>
        <S.Label>조합 방식</S.Label>
        <S.TextArea
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          placeholder="조합 방법을 입력해주세요."
        />
        <S.Label>필요 식재료</S.Label>
        <S.TextArea
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="사용할 재료를 입력해주세요."
        />
        <S.SubmitButton onClick={handleSubmit}>완료</S.SubmitButton>
      </S.Form>
      <Footer />
    </S.Container>
  );
};

export default Post;
