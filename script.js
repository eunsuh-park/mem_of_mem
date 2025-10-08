// 노트 데이터 구조
const notesData = [
    {
        id: 1,
        title: "노트 01",
        coverImage: "images/note_cover/note_01.png",
        backImage: "images/note_back/note_01_back.png",
        pages: []
    },
    {
        id: 2,
        title: "노트 02",
        coverImage: "images/note_cover/note_02.png",
        backImage: "images/note_back/note_02_back.png",
        pages: []
    },
    {
        id: 3,
        title: "노트 03",
        coverImage: "images/note_cover/note_03.png",
        backImage: "images/note_back/note_03_back.png",
        pages: [
            "images/note_contents/03/2013/",
            "images/note_contents/03/2014/",
            "images/note_contents/03/2015/",
            "images/note_contents/03/2016/"
        ]
    },
    {
        id: 4,
        title: "노트 04",
        coverImage: "images/note_cover/note_04.png",
        backImage: "images/note_back/note_04_back.png",
        pages: []
    },
    {
        id: 5,
        title: "노트 05",
        coverImage: "images/note_cover/note_05.png",
        backImage: "images/note_back/note_05_back.png",
        pages: []
    },
    {
        id: 6,
        title: "노트 06",
        coverImage: "images/note_cover/note_06.png",
        backImage: "images/note_back/note_06_back.png",
        pages: []
    },
    {
        id: 7,
        title: "노트 07",
        coverImage: "images/note_cover/note_07.png",
        backImage: "images/note_back/note_07_back.png",
        pages: []
    },
    {
        id: 8,
        title: "노트 08",
        coverImage: "images/note_cover/note_08.png",
        backImage: "images/note_back/note_08_back.png",
        pages: []
    },
    {
        id: 9,
        title: "노트 09",
        coverImage: "images/note_cover/note_09.png",
        backImage: "images/note_back/note_09_back.png",
        pages: []
    },
    {
        id: 10,
        title: "노트 10",
        coverImage: "images/note_cover/note_10.png",
        backImage: "images/note_back/note_10_back.png",
        pages: []
    },
    {
        id: 11,
        title: "노트 11",
        coverImage: "images/note_cover/note_11.png",
        backImage: "images/note_back/note_11_back.png",
        pages: []
    },
    {
        id: 12,
        title: "노트 12",
        coverImage: "images/note_cover/note_12.png",
        backImage: "images/note_back/note_12_back.png",
        pages: []
    },
    {
        id: 13,
        title: "노트 13",
        coverImage: "images/note_cover/note_13.png",
        backImage: "images/note_back/note_13_back.png",
        pages: []
    },
    {
        id: 14,
        title: "노트 14",
        coverImage: "images/note_cover/note_14.png",
        backImage: "images/note_back/note_14_back.png",
        pages: []
    },
    {
        id: 15,
        title: "노트 15",
        coverImage: "images/note_cover/note_15.png",
        backImage: "images/note_back/note_15_back.png",
        pages: []
    },
    {
        id: 16,
        title: "노트 16",
        coverImage: "images/note_cover/note_16.png",
        backImage: "images/note_back/note_16_back.png",
        pages: []
    },
    {
        id: 17,
        title: "노트 17",
        coverImage: "images/note_cover/note_17.png",
        backImage: "images/note_back/note_17_back.png",
        pages: []
    },
    {
        id: 18,
        title: "노트 18",
        coverImage: "images/note_cover/note_18.png",
        backImage: "images/note_back/note_18_back.png",
        pages: []
    },
    {
        id: 19,
        title: "노트 19",
        coverImage: "images/note_cover/note_19.png",
        backImage: "images/note_back/note_19_back.png",
        pages: []
    },
    {
        id: 20,
        title: "노트 20",
        coverImage: "images/note_cover/note_20.png",
        backImage: "images/note_back/note_20_back.png",
        pages: []
    },
    {
        id: 21,
        title: "노트 21",
        coverImage: "images/note_cover/note_21.png",
        backImage: "images/note_back/note_21_back.png",
        pages: []
    },
    {
        id: 22,
        title: "노트 22",
        coverImage: "images/note_cover/note_22.png",
        backImage: "images/note_back/note_22_back.png",
        pages: []
    },
    {
        id: 23,
        title: "노트 23",
        coverImage: "images/note_cover/note_23.png",
        backImage: "images/note_back/note_23_back.png",
        pages: []
    }
];

// 전역 변수
let currentNote = null;
let currentPageIndex = 0;

// DOM 요소들
const notesGrid = document.getElementById('notesGrid');
const noteModal = document.getElementById('noteModal');
const modalTitle = document.getElementById('modalTitle');
const notePages = document.getElementById('notePages');
const closeModal = document.getElementById('closeModal');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');
const mainDetailToggle = document.querySelector('.main-detail-toggle');
const mainDetailContent = document.querySelector('.main-detail-content');
const mainFooterToggle = document.querySelector('.main-footer-toggle');
const mainFooterContent = document.querySelector('.main-footer-content');
const mainShelfStageHeader = document.querySelector('.main-shelf-stage-header');
const hoverInfo = document.querySelector('.hover-info');
const hoverInfoItem = document.querySelector('.hover-info-item');
const hoverInfoItemText = document.querySelector('.hover-info-item-text');

// 노트 카드 생성 함수
function createNoteCard(note) {
    const card = document.createElement('div');
    card.className = 'note-card';
    const pageCount = note.pages.length === 0 ? '임시 이미지' : `${note.pages.length} 페이지`;
    card.innerHTML = `
        <img src="${note.coverImage}" alt="${note.title}" class="note-cover" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
        <div class="note-info">
            <h3 class="note-title">${note.title}</h3>
            <p class="note-meta">${pageCount}</p>
        </div>
    `;
    
    card.addEventListener('click', () => openNoteModal(note));
    return card;
}

// 노트 모달 열기
function openNoteModal(note) {
    currentNote = note;
    currentPageIndex = 0;
    
    modalTitle.textContent = note.title;
    notePages.innerHTML = '';
    
    // pages 배열이 비어있는 경우 임시 이미지 표시
    if (note.pages.length === 0) {
        const placeholderImg = document.createElement('img');
        placeholderImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuaXoOaViOeUqOaItzwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjYwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+7Jqw7Iqk7Yq47Yq47IqkIOyYiOygnOydgCDsl4bsnYzslrQ8L3RleHQ+PC9zdmc+';
        placeholderImg.alt = `${note.title} - 임시 이미지`;
        placeholderImg.className = 'note-page active';
        notePages.appendChild(placeholderImg);
    } else {
        // 페이지 이미지들 생성
        note.pages.forEach((page, index) => {
            const pageImg = document.createElement('img');
            pageImg.src = page;
            pageImg.alt = `${note.title} - 페이지 ${index + 1}`;
            pageImg.className = 'note-page';
            pageImg.onerror = function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
            };
            
            if (index === 0) {
                pageImg.classList.add('active');
            }
            
            notePages.appendChild(pageImg);
        });
    }
    
    updatePageControls();
    noteModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 페이지 컨트롤 업데이트
function updatePageControls() {
    if (!currentNote) return;
    
    const totalPages = currentNote.pages.length;
    const pages = document.querySelectorAll('.note-page');
    const pageControls = document.querySelector('.page-controls');
    
    // 모든 페이지 숨기기
    pages.forEach(page => page.classList.remove('active'));
    
    // 현재 페이지 보이기
    if (pages[currentPageIndex]) {
        pages[currentPageIndex].classList.add('active');
    }
    
    // 빈 pages 배열인 경우 페이지 네비게이션 UI 숨기기
    if (totalPages === 0) {
        pageControls.style.display = 'none';
    } else {
        pageControls.style.display = 'flex';
        pageInfo.textContent = `${currentPageIndex + 1} / ${totalPages}`;
        
        // 버튼 상태 업데이트
        prevPageBtn.disabled = currentPageIndex === 0;
        nextPageBtn.disabled = currentPageIndex === totalPages - 1;
    }
}

// 이전 페이지
function goToPreviousPage() {
    if (currentNote && currentNote.pages.length > 0 && currentPageIndex > 0) {
        currentPageIndex--;
        updatePageControls();
    }
}

// 다음 페이지
function goToNextPage() {
    if (currentNote && currentNote.pages.length > 0 && currentPageIndex < currentNote.pages.length - 1) {
        currentPageIndex++;
        updatePageControls();
    }
}

// 모달 닫기
function closeNoteModal() {
    noteModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentNote = null;
    currentPageIndex = 0;
}

// 키보드 이벤트 처리
function handleKeyPress(event) {
    if (noteModal.style.display === 'block') {
        switch(event.key) {
            case 'Escape':
                closeNoteModal();
                break;
            case 'ArrowLeft':
                goToPreviousPage();
                break;
            case 'ArrowRight':
                goToNextPage();
                break;
        }
    }
}

// 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
    // 노트 카드들 렌더링
    notesData.forEach(note => {
        const card = createNoteCard(note);
        notesGrid.appendChild(card);
    });
    
    // 모달 이벤트 리스너
    closeModal.addEventListener('click', closeNoteModal);
    prevPageBtn.addEventListener('click', goToPreviousPage);
    nextPageBtn.addEventListener('click', goToNextPage);
    
    // 모달 배경 클릭시 닫기
    noteModal.addEventListener('click', function(event) {
        if (event.target === noteModal) {
            closeNoteModal();
        }
    });
    
    // 키보드 이벤트
    document.addEventListener('keydown', handleKeyPress);
});

// 이미지 로딩 에러 처리
function handleImageError(img) {
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
}


//아코디언 UI 이벤트 리스너
//const mainDetailToggle = document.querySelector('.main-detail-toggle');
//const mainDetailContent = document.querySelector('.main-detail-content');

mainDetailToggle.addEventListener('click', function() {
    mainDetailContent.classList.toggle('disabled');
});

mainFooterToggle.addEventListener('click', function() {
    const wasDisabled = mainFooterContent.classList.contains('disabled');
    mainFooterContent.classList.toggle('disabled');
    // disabled가 없어졌을 때(=보이게 되었을 때) 스크롤을 제일 아래로 이동
    if (wasDisabled && !mainFooterContent.classList.contains('disabled')) {
        mainFooterContent.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
});

//const mainShelfStageHeader = document.querySelector('.main-shelf-stage-header');
// mainShelfStageHeader는 여러 개가 있을 수 있으므로, 모든 해당 요소에 대해 이벤트를 등록합니다.
document.querySelectorAll('.main-shelf-stage-header').forEach(function(header) {
    header.addEventListener('click', function() {
        // 클릭된 header의 부모(.main-shelf-stage)에서 하위 .main-shelf-stage-content를 찾음
        const stage = header.closest('.main-shelf-stage');
        if (stage) {
            const content = stage.querySelector('.main-shelf-stage-content');
            if (content) {
                content.classList.toggle('disabled');
            }
        }
    });
});

// const hoverInfo = document.querySelector('.hover-info');
// onst hoverInfoItem = document.querySelector('.hover-info-item');
// const hoverInfoItemText = document.querySelector('.hover-info-item-text');//
// .main-shelf-stage-content-item 여러 개에 대해 hover-info 토글
// hover-info를 HTML 구조에서 분리하여 body 최상단에 위치시키고, 각 noteCover hover 시 해당 위치에 표시
(function() {
    // hover-info를 body에 append (최상위)
    let hoverInfo = document.querySelector('.hover-info');
    // 없으면 새로 생성
    if (!hoverInfo) {
        hoverInfo = document.createElement('div');
        hoverInfo.className = 'hover-info disabled';
        // 예시: 기본 항목 추가 (실제 데이터에 맞게 수정 필요)
        hoverInfo.innerHTML = `
            <div class="hover-info-item" id="note_purpose">
                <p class="hover-info-item-text">사용 목적</p>
            </div>
            <div class="hover-info-item" id="note_period">
                <p class="hover-info-item-text">시기 구분</p>
            </div>
            <div class="hover-info-item" id="note_duration">
                <p class="hover-info-item-text">개시일자-최종 사용일자</p>
            </div>
            <div class="hover-info-item" id="note_total_page">
                <p class="hover-info-item-text">구입처</p>
            </div>
            <div class="hover-info-item" id="note_remaining_page">
                <p class="hover-info-item-text">페이지 수</p>
            </div>
        `;
        document.body.appendChild(hoverInfo);
    }

    // hover-info를 항상 body의 최상위에 위치시키기 위한 스타일
    hoverInfo.style.position = 'absolute';
    hoverInfo.style.pointerEvents = 'none'; // hover-info 위에 마우스가 올라가도 이벤트가 noteCover에만 적용

    document.querySelectorAll('.main-shelf-stage-content-item').forEach(function(noteCover) {
        noteCover.addEventListener('mouseenter', function(e) {
            // 이미지의 위치와 크기를 구함
            const rect = noteCover.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // hover-info의 크기 측정 (보이게 해야 정확히 측정됨)
            hoverInfo.classList.remove('disabled');
            const hoverWidth = hoverInfo.offsetWidth;
            const hoverHeight = hoverInfo.offsetHeight;

            // 이미지의 우측 중앙에 hover-info를 위치
            const left = rect.right + 24 + scrollLeft; // 이미지 우측에 24px 띄우기
            const top = rect.top + scrollTop + (rect.height / 2) - (hoverHeight / 2);

            hoverInfo.style.left = left + 'px';
            hoverInfo.style.top = top + 'px';
            hoverInfo.style.zIndex = '9999';
            hoverInfo.classList.remove('disabled');
        });
        noteCover.addEventListener('mouseleave', function() {
            hoverInfo.classList.add('disabled');
        });
    });
})();


// flip 버튼 기능: 노트 커버 이미지를 클릭하면 앞/뒤 이미지를 토글한다.
// flip 버튼은 각 main-shelf-stage-content-item에 hover 시에만 동적으로 생성/제거된다.

(function() {
    // flip 버튼의 HTML 템플릿
    const flipButtonHTML = `
        <div class="button-container" id="main-shelf-stage-content-item-flip-button">
            <button class="button" id="main-shelf-stage-content-item-flip-button">
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>flip_vertical_fill</title><g id="flip_vertical_fill" fill='none' fill-rule='evenodd'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#FFFFFFFF' d='M12 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M7.864 5.207C8.28 4.045 10 4.343 10 5.577V18.9A1.1 1.1 0 0 1 8.9 20H4.142a1.1 1.1 0 0 1-1.036-1.47zm6.136.37c0-1.234 1.72-1.532 2.136-.37l4.758 13.323A1.1 1.1 0 0 1 19.858 20H15.1a1.1 1.1 0 0 1-1.1-1.1z'/></g></svg>
            </button>
        </div>
    `;

    // 각 노트 커버 아이템에 hover 이벤트를 부여
    document.querySelectorAll('.main-shelf-stage-content-item').forEach(function(noteCoverItem) {
        let flipButtonContainer = null;

        noteCoverItem.addEventListener('mouseenter', function() {
            // flip 버튼이 이미 있으면 중복 생성 방지
            if (!noteCoverItem.querySelector('.button-container')) {
                // 버튼을 DOM으로 파싱해서 삽입
                const temp = document.createElement('div');
                temp.innerHTML = flipButtonHTML.trim();
                flipButtonContainer = temp.firstChild;
                // 버튼을 아이템의 맨 앞에 삽입
                noteCoverItem.insertBefore(flipButtonContainer, noteCoverItem.firstChild);

                // 버튼 클릭 이벤트 등록
                const flipBtn = flipButtonContainer.querySelector('button');
                flipBtn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    const noteCoverImage = noteCoverItem.querySelector('img');
                    const currentSrc = noteCoverImage.getAttribute('src');

                    // 1. 현재 노트 커버(front)면 -> 뒷면(back) 이미지로 변경 후 3초 뒤에 다시 앞면으로 복귀
                    if (currentSrc.includes('note_cover')) {
                        const newSrc = currentSrc.replace(
                            /note_cover\/(note_\d+)\.png/,
                            'note_back/$1_back.png'
                        );
                        noteCoverImage.setAttribute('src', newSrc);

                        setTimeout(function() {
                            if (noteCoverImage.getAttribute('src') === newSrc) {
                                const originalSrc = newSrc.replace(
                                    /note_back\/(note_\d+)_back\.png/,
                                    'note_cover/$1.png'
                                );
                                noteCoverImage.setAttribute('src', originalSrc);
                            }
                        }, 1500);

                    // 2. 현재 노트 뒷면(back)이면 -> 앞면(cover) 이미지로 변경 (즉시)
                    } else if (currentSrc.includes('note_back')) {
                        const newSrc = currentSrc.replace(
                            /note_back\/(note_\d+)_back\.png/,
                            'note_cover/$1.png'
                        );
                        noteCoverImage.setAttribute('src', newSrc);
                    }
                });
            }
        });

        noteCoverItem.addEventListener('mouseleave', function() {
            // flip 버튼이 있으면 제거
            const btn = noteCoverItem.querySelector('.button-container');
            if (btn) {
                btn.remove();
            }
        });
    });
})();
