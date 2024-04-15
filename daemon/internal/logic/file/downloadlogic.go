package file

import (
	"context"
	"io"
	"os"
	"path/filepath"

	"github.com/zeromicro/go-zero/core/logx"

	"github.com/jaronnie/jzero/daemon/internal/svc"
	"github.com/jaronnie/jzero/daemon/internal/types"
)

type DownloadLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
	writer io.Writer
}

func NewDownloadLogic(ctx context.Context, svcCtx *svc.ServiceContext, writer io.Writer) *DownloadLogic {
	return &DownloadLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
		writer: writer,
	}
}

func (l *DownloadLogic) Download(req *types.DownloadRequest) error {
	logx.Infof("download %s", req.File)
	body, err := os.ReadFile(filepath.Join("./filedata", req.File))
	if err != nil {
		return err
	}

	n, err := l.writer.Write(body)
	if err != nil {
		return err
	}

	if n < len(body) {
		return io.ErrClosedPipe
	}

	return nil
}
