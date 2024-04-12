package hello

import (
	"net/http"

	"github.com/jaronnie/jzero/daemon/internal/logic/hello"
	"github.com/jaronnie/jzero/daemon/internal/svc"
	"github.com/jaronnie/jzero/daemon/internal/types"
	"github.com/zeromicro/go-zero/rest/httpx"
)

func HelloPostHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.PostRequest
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}

		l := hello.NewHelloPostLogic(r.Context(), svcCtx)
		resp, err := l.HelloPost(&req)
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
