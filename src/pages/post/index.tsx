// Post.tsx
import React, { useState } from "react";
import * as S from "./style";

const Post: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton>←돌아가기</S.BackButton>
      </S.Header>
      <S.ImageUploadBox>
        {image ? (
          <S.ImagePreview src={image} alt="Preview" />
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
        <S.TextArea placeholder="조합 방법을 입력해주세요." />
        <S.Label>필요 식재료</S.Label>
        <S.TextArea placeholder="사용할 재료를 입력해주세요." />
        <S.SubmitButton>완료</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default Post;
