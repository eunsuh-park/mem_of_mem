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
const mainShelfStageHeader = document.querySelector('.main-shelf-stage-header');

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