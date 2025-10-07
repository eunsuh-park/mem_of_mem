// 노트 데이터 구조
const notesData = [
    {
        id: 1,
        title: "노트 01",
        coverImage: "images/note_cover/note_01.png",
        backImage: "images/note_back/note_01_back.png",
        pages: [
            "images/note_contents/01/Scan_0001.png",
            "images/note_contents/01/Scan_0002.png",
            "images/note_contents/01/Scan_0003.png",
            "images/note_contents/01/Scan_0004.png",
            "images/note_contents/01/Scan_0005.png",
            "images/note_contents/01/Scan_0006.png",
            "images/note_contents/01/Scan_0007.png",
            "images/note_contents/01/Scan_0008.png",
            "images/note_contents/01/Scan_0009.png",
            "images/note_contents/01/Scan_0010.png",
            "images/note_contents/01/Scan_0011.png"
        ]
    },
    {
        id: 2,
        title: "노트 02",
        coverImage: "images/note_cover/note_02.png",
        backImage: "images/note_back/note_02_back.png",
        pages: [
            "images/note_contents/02/Scan_0001.png",
            "images/note_contents/02/Scan_0002.png",
            "images/note_contents/02/Scan_0003.png",
            "images/note_contents/02/Scan_0004.png",
            "images/note_contents/02/Scan_0005.png",
            "images/note_contents/02/Scan_0006.png",
            "images/note_contents/02/Scan_0007.png",
            "images/note_contents/02/Scan_0008.png",
            "images/note_contents/02/Scan_0009.png",
            "images/note_contents/02/Scan_0010.png",
            "images/note_contents/02/Scan_0011.png"
        ]
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
        pages: [
            "images/note_contents/04/Scan_0001.png",
            "images/note_contents/04/Scan_0002.png",
            "images/note_contents/04/Scan_0003.png",
            "images/note_contents/04/Scan_0004.png",
            "images/note_contents/04/Scan_0005.png",
            "images/note_contents/04/Scan_0006.png",
            "images/note_contents/04/Scan_0007.png",
            "images/note_contents/04/Scan_0008.png",
            "images/note_contents/04/Scan_0009.png",
            "images/note_contents/04/Scan_0010.png",
            "images/note_contents/04/Scan_0011.png"
        ]
    },
    {
        id: 5,
        title: "노트 05",
        coverImage: "images/note_cover/note_05.png",
        backImage: "images/note_back/note_05_back.png",
        pages: [
            "images/note_contents/05/Scan_0001.png",
            "images/note_contents/05/Scan_0002.png",
            "images/note_contents/05/Scan_0003.png",
            "images/note_contents/05/Scan_0004.png",
            "images/note_contents/05/Scan_0005.png",
            "images/note_contents/05/Scan_0006.png",
            "images/note_contents/05/Scan_0007.png",
            "images/note_contents/05/Scan_0008.png",
            "images/note_contents/05/Scan_0009.png",
            "images/note_contents/05/Scan_0010.png",
            "images/note_contents/05/Scan_0011.png"
        ]
    },
    {
        id: 6,
        title: "노트 06",
        coverImage: "images/note_cover/note_06.png",
        backImage: "images/note_back/note_06_back.png",
        pages: [
            "images/note_contents/06/Scan_0001.png",
            "images/note_contents/06/Scan_0002.png",
            "images/note_contents/06/Scan_0003.png",
            "images/note_contents/06/Scan_0004.png",
            "images/note_contents/06/Scan_0005.png",
            "images/note_contents/06/Scan_0006.png",
            "images/note_contents/06/Scan_0007.png",
            "images/note_contents/06/Scan_0008.png",
            "images/note_contents/06/Scan_0009.png",
            "images/note_contents/06/Scan_0010.png",
            "images/note_contents/06/Scan_0011.png"
        ]
    },
    {
        id: 7,
        title: "노트 07",
        coverImage: "images/note_cover/note_07.png",
        backImage: "images/note_back/note_07_back.png",
        pages: [
            "images/note_contents/07/Scan_0001.png",
            "images/note_contents/07/Scan_0002.png",
            "images/note_contents/07/Scan_0003.png",
            "images/note_contents/07/Scan_0004.png",
            "images/note_contents/07/Scan_0005.png",
            "images/note_contents/07/Scan_0006.png",
            "images/note_contents/07/Scan_0007.png",
            "images/note_contents/07/Scan_0008.png",
            "images/note_contents/07/Scan_0009.png",
            "images/note_contents/07/Scan_0010.png",
            "images/note_contents/07/Scan_0011.png"
        ]
    },
    {
        id: 8,
        title: "노트 08",
        coverImage: "images/note_cover/note_08.png",
        backImage: "images/note_back/note_08_back.png",
        pages: [
            "images/note_contents/08/Scan_0001.png",
            "images/note_contents/08/Scan_0002.png",
            "images/note_contents/08/Scan_0003.png",
            "images/note_contents/08/Scan_0004.png",
            "images/note_contents/08/Scan_0005.png",
            "images/note_contents/08/Scan_0006.png",
            "images/note_contents/08/Scan_0007.png",
            "images/note_contents/08/Scan_0008.png",
            "images/note_contents/08/Scan_0009.png",
            "images/note_contents/08/Scan_0010.png",
            "images/note_contents/08/Scan_0011.png"
        ]
    },
    {
        id: 9,
        title: "노트 09",
        coverImage: "images/note_cover/note_09.png",
        backImage: "images/note_back/note_09_back.png",
        pages: [
            "images/note_contents/09/Scan_0001.png",
            "images/note_contents/09/Scan_0002.png",
            "images/note_contents/09/Scan_0003.png",
            "images/note_contents/09/Scan_0004.png",
            "images/note_contents/09/Scan_0005.png",
            "images/note_contents/09/Scan_0006.png",
            "images/note_contents/09/Scan_0007.png",
            "images/note_contents/09/Scan_0008.png",
            "images/note_contents/09/Scan_0009.png",
            "images/note_contents/09/Scan_0010.png",
            "images/note_contents/09/Scan_0011.png"
        ]
    },
    {
        id: 10,
        title: "노트 10",
        coverImage: "images/note_cover/note_10.png",
        backImage: "images/note_back/note_10_back.png",
        pages: [
            "images/note_contents/10/Scan_0001.png",
            "images/note_contents/10/Scan_0002.png",
            "images/note_contents/10/Scan_0003.png",
            "images/note_contents/10/Scan_0004.png",
            "images/note_contents/10/Scan_0005.png",
            "images/note_contents/10/Scan_0006.png",
            "images/note_contents/10/Scan_0007.png",
            "images/note_contents/10/Scan_0008.png",
            "images/note_contents/10/Scan_0009.png",
            "images/note_contents/10/Scan_0010.png",
            "images/note_contents/10/Scan_0011.png"
        ]
    },
    {
        id: 11,
        title: "노트 11",
        coverImage: "images/note_cover/note_11.png",
        backImage: "images/note_back/note_11_back.png",
        pages: [
            "images/note_contents/11/Scan_0001.png",
            "images/note_contents/11/Scan_0002.png",
            "images/note_contents/11/Scan_0003.png",
            "images/note_contents/11/Scan_0004.png",
            "images/note_contents/11/Scan_0005.png",
            "images/note_contents/11/Scan_0006.png",
            "images/note_contents/11/Scan_0007.png",
            "images/note_contents/11/Scan_0008.png",
            "images/note_contents/11/Scan_0009.png",
            "images/note_contents/11/Scan_0010.png",
            "images/note_contents/11/Scan_0011.png"
        ]
    },
    {
        id: 12,
        title: "노트 12",
        coverImage: "images/note_cover/note_12.png",
        backImage: "images/note_back/note_12_back.png",
        pages: [
            "images/note_contents/12/Scan_0001.png",
            "images/note_contents/12/Scan_0002.png",
            "images/note_contents/12/Scan_0003.png",
            "images/note_contents/12/Scan_0004.png",
            "images/note_contents/12/Scan_0005.png",
            "images/note_contents/12/Scan_0006.png",
            "images/note_contents/12/Scan_0007.png",
            "images/note_contents/12/Scan_0008.png",
            "images/note_contents/12/Scan_0009.png",
            "images/note_contents/12/Scan_0010.png",
            "images/note_contents/12/Scan_0011.png"
        ]
    },
    {
        id: 13,
        title: "노트 13",
        coverImage: "images/note_cover/note_13.png",
        backImage: "images/note_back/note_13_back.png",
        pages: [
            "images/note_contents/13/Scan_0001.png",
            "images/note_contents/13/Scan_0002.png",
            "images/note_contents/13/Scan_0003.png",
            "images/note_contents/13/Scan_0004.png",
            "images/note_contents/13/Scan_0005.png",
            "images/note_contents/13/Scan_0006.png",
            "images/note_contents/13/Scan_0007.png",
            "images/note_contents/13/Scan_0008.png",
            "images/note_contents/13/Scan_0009.png",
            "images/note_contents/13/Scan_0010.png",
            "images/note_contents/13/Scan_0011.png"
        ]
    },
    {
        id: 14,
        title: "노트 14",
        coverImage: "images/note_cover/note_14.png",
        backImage: "images/note_back/note_14_back.png",
        pages: [
            "images/note_contents/14/Scan_0001.png",
            "images/note_contents/14/Scan_0002.png",
            "images/note_contents/14/Scan_0003.png",
            "images/note_contents/14/Scan_0004.png",
            "images/note_contents/14/Scan_0005.png",
            "images/note_contents/14/Scan_0006.png",
            "images/note_contents/14/Scan_0007.png",
            "images/note_contents/14/Scan_0008.png",
            "images/note_contents/14/Scan_0009.png",
            "images/note_contents/14/Scan_0010.png",
            "images/note_contents/14/Scan_0011.png"
        ]
    },
    {
        id: 15,
        title: "노트 15",
        coverImage: "images/note_cover/note_15.png",
        backImage: "images/note_back/note_15_back.png",
        pages: [
            "images/note_contents/15/Scan_0001.png",
            "images/note_contents/15/Scan_0002.png",
            "images/note_contents/15/Scan_0003.png",
            "images/note_contents/15/Scan_0004.png",
            "images/note_contents/15/Scan_0005.png",
            "images/note_contents/15/Scan_0006.png",
            "images/note_contents/15/Scan_0007.png",
            "images/note_contents/15/Scan_0008.png",
            "images/note_contents/15/Scan_0009.png",
            "images/note_contents/15/Scan_0010.png",
            "images/note_contents/15/Scan_0011.png"
        ]
    },
    {
        id: 16,
        title: "노트 16",
        coverImage: "images/note_cover/note_16.png",
        backImage: "images/note_back/note_16_back.png",
        pages: [
            "images/note_contents/16/Scan_0001.png",
            "images/note_contents/16/Scan_0002.png",
            "images/note_contents/16/Scan_0003.png",
            "images/note_contents/16/Scan_0004.png",
            "images/note_contents/16/Scan_0005.png",
            "images/note_contents/16/Scan_0006.png",
            "images/note_contents/16/Scan_0007.png",
            "images/note_contents/16/Scan_0008.png",
            "images/note_contents/16/Scan_0009.png",
            "images/note_contents/16/Scan_0010.png",
            "images/note_contents/16/Scan_0011.png"
        ]
    },
    {
        id: 17,
        title: "노트 17",
        coverImage: "images/note_cover/note_17.png",
        backImage: "images/note_back/note_17_back.png",
        pages: [
            "images/note_contents/17/Scan_0001.png",
            "images/note_contents/17/Scan_0002.png",
            "images/note_contents/17/Scan_0003.png",
            "images/note_contents/17/Scan_0004.png",
            "images/note_contents/17/Scan_0005.png",
            "images/note_contents/17/Scan_0006.png",
            "images/note_contents/17/Scan_0007.png",
            "images/note_contents/17/Scan_0008.png",
            "images/note_contents/17/Scan_0009.png",
            "images/note_contents/17/Scan_0010.png",
            "images/note_contents/17/Scan_0011.png"
        ]
    },
    {
        id: 18,
        title: "노트 18",
        coverImage: "images/note_cover/note_18.png",
        backImage: "images/note_back/note_18_back.png",
        pages: [
            "images/note_contents/18/Scan_0001.png",
            "images/note_contents/18/Scan_0002.png",
            "images/note_contents/18/Scan_0003.png",
            "images/note_contents/18/Scan_0004.png",
            "images/note_contents/18/Scan_0005.png",
            "images/note_contents/18/Scan_0006.png",
            "images/note_contents/18/Scan_0007.png",
            "images/note_contents/18/Scan_0008.png",
            "images/note_contents/18/Scan_0009.png",
            "images/note_contents/18/Scan_0010.png",
            "images/note_contents/18/Scan_0011.png"
        ]
    },
    {
        id: 19,
        title: "노트 19",
        coverImage: "images/note_cover/note_19.png",
        backImage: "images/note_back/note_19_back.png",
        pages: [
            "images/note_contents/19/Scan_0001.png",
            "images/note_contents/19/Scan_0002.png",
            "images/note_contents/19/Scan_0003.png",
            "images/note_contents/19/Scan_0004.png",
            "images/note_contents/19/Scan_0005.png",
            "images/note_contents/19/Scan_0006.png",
            "images/note_contents/19/Scan_0007.png",
            "images/note_contents/19/Scan_0008.png",
            "images/note_contents/19/Scan_0009.png",
            "images/note_contents/19/Scan_0010.png",
            "images/note_contents/19/Scan_0011.png"
        ]
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

// 노트 카드 생성 함수
function createNoteCard(note) {
    const card = document.createElement('div');
    card.className = 'note-card';
    card.innerHTML = `
        <img src="${note.coverImage}" alt="${note.title}" class="note-cover" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
        <div class="note-info">
            <h3 class="note-title">${note.title}</h3>
            <p class="note-meta">${note.pages.length} 페이지</p>
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
    
    updatePageControls();
    noteModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 페이지 컨트롤 업데이트
function updatePageControls() {
    if (!currentNote) return;
    
    const totalPages = currentNote.pages.length;
    const pages = document.querySelectorAll('.note-page');
    
    // 모든 페이지 숨기기
    pages.forEach(page => page.classList.remove('active'));
    
    // 현재 페이지 보이기
    if (pages[currentPageIndex]) {
        pages[currentPageIndex].classList.add('active');
    }
    
    // 페이지 정보 업데이트
    pageInfo.textContent = `${currentPageIndex + 1} / ${totalPages}`;
    
    // 버튼 상태 업데이트
    prevPageBtn.disabled = currentPageIndex === 0;
    nextPageBtn.disabled = currentPageIndex === totalPages - 1;
}

// 이전 페이지
function goToPreviousPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updatePageControls();
    }
}

// 다음 페이지
function goToNextPage() {
    if (currentPageIndex < currentNote.pages.length - 1) {
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

